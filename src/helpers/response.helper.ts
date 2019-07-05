import { HttpException } from '@nestjs/common';

export class Response<T> {
  message: string;
  data: T;

  constructor(message: string, data: T) {
    this.message = message;
    this.data = data;
  }
}

export class PaginationOptions<T> {
  page: number;
  limit: number;
  queryPage: number;
  data: T[];
}

export class Pagination<T> {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
  data: T[];

  constructor(results: T[], total: number, pagination: PaginationOptions<T>) {
    this.page = Number(pagination.page);
    this.limit = Number(pagination.limit);
    this.total = total;
    this.totalPage = Math.ceil(total / pagination.limit);
    this.data = results;
  }
}

export function response<T>(message: string, data: T = null) {
  return new Response(message, data);
}

export function responseError(message: string, code: number = 422) {
  return Promise.reject(new HttpException({ message }, code));
}

export function responsePage<T>(results: T[], total: number, paginationOptions: PaginationOptions<T>) {
  return new Pagination<T>(results, total, paginationOptions);
}

export function createPaginationOptions(req: any) {
  let page = req.query.page;
  let limit = req.query.limit;
  const pagination = new PaginationOptions();

  if (!page || page <= 0) { page = 1; }
  if (!limit) { limit = 20; }

  pagination.page = page;
  pagination.limit = limit;
  pagination.queryPage = (page - 1) * limit;

  return pagination;
}
