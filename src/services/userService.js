import * as request from '~/components/AccountsItem/untils/request';
export const getSuggested = async ({ page, perPage }) => {
  try {
    const res = await request.get('users/suggested', {
      params: {
        page,
        per_page: perPage,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
