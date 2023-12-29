import axios from 'axios'


interface ReturnDashboard {
    status: boolean,
    data: {}
}

export const getAll = async (): Promise<ReturnDashboard> => {
  let rest:ReturnDashboard = { status: false , data: "Something went wrong"};
    await axios.get(`https://api-challenge.free.beeceptor.com/dash`).then(function (response) {
      rest = { status: true, data: response.data}
      })
      .catch(function (error) {
        rest = { status: true, data: "Something went wrong"};
      });

    return rest
};