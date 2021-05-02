export default function page(list, current, pageSize) {
  let total;
  // eslint-disable-next-line no-cond-assign
  if (list && (total = list.length)) {
    return {
      current,
      pageSize,
      total,
      list: total > pageSize
        ? list.slice((current - 1) * pageSize, current * pageSize)
        : list
    };
  }
  return { current, pageSize, total: 0, list: [] };
}
