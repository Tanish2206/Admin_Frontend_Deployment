import instance from "./Axios";

const signUp = async (payload: any) => {
  try {
    const response = await instance.post("register/", payload);
    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};
const login = async (payload: any) => {
  try {
    const response = await instance.post("admin/login/", payload);
    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};
const verifyOtp = async (payload: any) => {
  try {
    const response = await instance.post("/verify-otp", payload);

    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};
const addProject = async (payload: any, config: any) => {
  try {
    const response = await instance.post("admin/project/add", payload, config);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));

    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const getProduct = async () => {
  try {
    const response = await instance.get("admin/user/projects");
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));

    return response?.data ? response?.data : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const editProject = async (payload: any, id: any, config: any) => {
  try {
    const response = await instance.patch(
      `admin/project/update?id=${id}`,
      payload,
      config
    );
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));

    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const deleteProduct = async (payload: any) => {
  try {
    const response = await instance.delete(
      `admin/project/delete?id=${payload}`
    );
    return response?.data ? response: "";
  } catch (error) {
    return error;
  }
};

//User .......................................................................................

const getUser = async () => {
  try {
    const response = await instance.get("admin/user-details");
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));

    return response?.data ? response?.data : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const editUser = async (payload: any, id: any) => {
  try {
    const response = await instance.patch(
      `admin/update-user/?id=${id}`,
      payload
    );
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));

    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const deleteUser = async (payload: any) => {
  try {
    const response = await instance.delete(
      `admin/project/delete?id=${payload}`
    );
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};
const changeUserStatus = async (status: any, id: any) => {
  try {
    const response = await instance.patch(
      `admin/user-status/?id=${id}&status=${status}`
    );
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};

const createUser = async (payload: any) => {
  try {
    const response = await instance.post("admin/user/register", payload);
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};
//........................................//...............................

const getProfile = async (id: any) => {
  try {
    const response = await instance.get(`admin/profile?id=${id}`);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));

    return response?.data ? response?.data : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

//design.......................................

const getDesigns = async () => {
  try {
    const response = await instance.post("admin/designs");
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));

    return response?.data ? response?.data : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};
const createDesigns = async (payload: any, config: any) => {
  try {
    const response = await instance.post("admin/design/add/", payload, config);
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};
const editDesign = async (payload: any, id: any, config: any) => {
  try {
    const response = await instance.patch(
      `/admin/design/update/?id=${id}`,
      payload,
      config
    );
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));

    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const deleteDesign = async (payload: any) => {
  try {
    const response = await instance.delete(`admin/design/delete?id=${payload}`);
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};

// ================= Eqnuiry ==================

const getEnquiries = async () => {
  try {
    const response = await instance.get("admin/enquiry");
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};

// ================= Designer ==================




const getDesigner = async () => {
  try {
    const response = await instance.get("admin/designer-details");
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};





const changeDesginerStatus=async (status: any, id: any)=>{
  try {
    const response = await instance.patch(
      `/admin/designer-status/?id=${id}&status=${status}`
    );
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
}
const projectAssign = async (payload:any) => {
  try {
    const response = await instance.post(" ", payload);
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};

const createDesigner = async (payload:any,config:any) => {
  try {
    const response = await instance.post("/admin/designer/register/", payload,config);
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};


const editDesigner= async (payload: any, id: any, config: any) => {
  try {
    const response = await instance.patch(
      `/admin/designer/update-designer/?id=${id}`,
      payload,
      config
    );
  

    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const getDesignerProject = async () => {
  try {
    const response = await instance.get("admin/get-all-projects");
    return response?.data ? response : "";
  } catch (error) {
    return error;
  }
};

const AuthService = {
  signUp,
  login,
  verifyOtp,
  addProject,
  getProduct,
  editProject,
  deleteProduct,
  getUser,
  editUser,
  deleteUser,
  changeUserStatus,
  getProfile,
  createUser,
  getDesigns,
  createDesigns,
  editDesign,
  deleteDesign,
  getEnquiries,
  getDesigner,
  changeDesginerStatus,
  projectAssign,
  createDesigner,
  editDesigner,
  getDesignerProject
};
export default AuthService;
