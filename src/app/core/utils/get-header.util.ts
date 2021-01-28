import { HttpHeaders } from '@angular/common/http';

function getHeaderFromResponse(headers: HttpHeaders, name: string) {
  return headers.get(name);
}

export function getTotalCountFromRes(headers: HttpHeaders): number {
  const totalCount = getHeaderFromResponse(headers, 'X-Pagination-Total-Count');
  return totalCount ? +totalCount : 0;
}