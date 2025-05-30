import * as request from '~/components/AccountsItem/untils/request';
export const search = async (q, type = ' less') => {
  try {
    const res = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
search();
