import Swal from "sweetalert2";
import { jpApi } from "../jpApi";

export const setNewUser = async (data) => {
    const res = await jpApi.post("/users", data);
    if (res) {
      console.log(res);
      Swal.fire({
        title: `کاربر ${res.data.name} ساخته شد`,
        text: "کاربر با موفقیت ساخته شد",
        icon: "success",
        confirmButtonColor: "#1f8",
        confirmButtonText: "متوجه شدم",
      });
    }
  };

export const setEditUser = async (data, userId) => {
    const res = await jpApi.put(`/users/${userId}`, data);
    if (res) {
      console.log(res);
      Swal.fire({
        title: `با موفقیت تغییر ایجاد شد ${res.data.name}`,
        text: "با موفقیت تغییر ثبت شد",
        icon: "success",
        confirmButtonColor: "#1f8",
        confirmButtonText: "متوجه شدم",
      });
    }
  };