import { catchAsync } from '../../utils/catchAsync';
import { sendRes } from '../../utils/sendResponce';
import { SellerServices } from './seller.services';

const getSellerInfo = catchAsync(async (req, res) => {

  const data = await SellerServices.getSellerInformationFromDB(req.params.sellerId);

  // Send responce
  sendRes(res, {
    success: true,
    statusCode: 200,
    message: 'Successfully retrive seller information!',
    data: data,
  });
});

export const SellerController = {
  getSellerInfo,
};
