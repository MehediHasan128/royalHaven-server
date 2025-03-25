import { catchAsync } from '../../utils/catchAsync';
import { sendRes } from '../../utils/sendResponce';
import { SellerServices } from './seller.services';

const createSeller = catchAsync(async (req, res) => {

  const data = await SellerServices.createSellerIntoDB(req.body);

  // Send responce
  sendRes(res, {
    success: true,
    statusCode: 200,
    message: 'Successfully user is created as a seller!',
    data: data,
  });
});

export const SellerController = {
    createSeller,
};
