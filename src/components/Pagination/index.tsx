import React, { useCallback, useEffect, useState } from 'react';

import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { useRouteMatch } from 'react-router-dom';
import { githubApi } from '../../services/api';

import {
  Container,
  PaginationButton,
  PaginationItem,
  Paginate,
} from './styles';

import Repository from '../Repository';
import LoadingPagination from '../Shimmer/LoadingPagination';

interface Repos {
  id: number;
  name: string;
  full_name: string;
  description?: string;
  html_url: string;
  forks: number;
}
interface HomeParams {
  name: string;
}
const Pagination: React.FC = () => {
  const { params } = useRouteMatch<HomeParams>();

  const [isLoading, setIsLoading] = useState(true);
  const [repositories, setRepositories] = useState<Repos[]>([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(6);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadRepos() {
      githubApi.get(`/users/${params.name}/repos`).then(response => {
        setTotal(response.data.length);
      });

      const response = await githubApi.get(
        `/users/${params.name}/repos?page=${currentPage}&per_page=${limit}`,
      );

      const totalPages = Math.ceil(total / limit);
      const arrayPages = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }
      setPages(arrayPages);
      setRepositories(response.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    loadRepos();
  }, [limit, pages, total, currentPage, params.name]);

  const limits = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setCurrentPage(1);
  }, []);

  const changePaginate = useCallback(
    (mode: string, page = 0) => {
      if (mode === '-') {
        setCurrentPage(currentPage - 1);
      } else if (mode === '+') {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(page);
      }
      setIsLoading(true);
    },
    [currentPage],
  );
  return (
    <Container>
      {isLoading ? (
        <LoadingPagination />
      ) : (
        <>
          <div className="container-header">
            <div className="custom-select">
              <select name="select" id="select" onChange={limits}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="100">100</option>
              </select>
            </div>
            <Paginate>
              <PaginationButton>
                {!isLoading && (
                  <strong>
                    {total}
                    &nbsp; Repositorios
                  </strong>
                )}

                {currentPage > 1 && (
                  <PaginationItem onClick={() => changePaginate('-')}>
                    <HiArrowLeft size={15} color="#8e72dc" />
                  </PaginationItem>
                )}
                {pages.map(page => (
                  <PaginationItem
                    isSelect={page === currentPage}
                    key={page}
                    onClick={() => changePaginate('', page)}
                  >
                    {page}
                  </PaginationItem>
                ))}
                {currentPage < pages.length && (
                  <PaginationItem onClick={() => changePaginate('+')}>
                    <HiArrowRight size={15} color="#8e72dc" />
                  </PaginationItem>
                )}
              </PaginationButton>
            </Paginate>
          </div>

          <div className="wrapper-repositories">
            {repositories.map(repository => (
              <Repository
                key={repository.id}
                owner_name={params.name}
                repository_name={repository.name}
                html_url={repository.html_url}
              />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Pagination;
