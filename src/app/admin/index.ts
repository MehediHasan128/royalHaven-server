import config from "../config";
import { User } from "../modules/users/user.model";

const admin = {
  id: 'Admin@2025',
  userName: { firstName: 'Mehedi Hasan', lastName: 'Baized' },
  email: 'mehedihasanbaized@gmail.com',
  password: config.admin_password,
  role: 'admin',
  profileImage: 'https://tinyurl.com/3jk7xwtw',
  phoneNumber: '+8801302557956',
  gender: 'male',
  status: 'active'
};

const seedAdmin = async() => {
    const isAdminExists = await User.findOne({role: 'admin'});
    if(!isAdminExists){
        await User.create(admin);
    };
};

export default seedAdmin;
