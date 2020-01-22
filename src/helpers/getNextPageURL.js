export default function getNextPageURL(headerLink) {
  const paginationMetaData =
    headerLink && headerLink.length > 0 && headerLink.split(',');

  let pagesObject = [];
  if (paginationMetaData) {
    paginationMetaData.forEach(pageData => {
      const page = pageData.split(';');
      pagesObject = {
        ...pagesObject,
        [page[1].substring(6, page[1].length - 1)]: page[0].trim(),
      };
    });
  }

  const nextPage =
    pagesObject && pagesObject.next
      ? pagesObject.next.substring(1, pagesObject.next.length - 1)
      : null;

  return nextPage;
}
