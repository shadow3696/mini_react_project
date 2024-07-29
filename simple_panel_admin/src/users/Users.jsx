import React, { useEffect, useState } from "react";
import style from "../style.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { jpApi } from "../jpApi";

let newUsers;
const Users = () => {
  /*
    // promise with async & await
    const prom = (id) => {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    };

    const func = async (id) => {
        const res = await prom(id);
        console.log(res.id);

        // await prom(id).then(res => {
        //     console.log(res.id);
        // });
        console.log(id);
    };
    
    // promise without async & await
    // const test = (id) => {
    //     return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
    //         console.log(res.data);
    //     });
    // };

    for (const item of [1, 2, 3, 4, 5, 6]) {
        func(item);
    };
    */

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [mainUsers, setMainUsers] = useState([]);

  const handleNavigate = (address, params) => {
    navigate(address, { state: params });
  };

  useEffect(() => {
    jpApi
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        setMainUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "میخوای حذف کنی؟",
      text: `آیا از حذف رکورد ${id} اطمینان داری؟`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "پاکش نکن",
      confirmButtonText: "آره پاکش کن",
    }).then((result) => {
      if (result.isConfirmed) {
        // jpApi.delete(`/users/${id}`).then(res=>{
        // console.log(res);
        // });

        jpApi({
          method: "DELETE",
          url: `/users/${id}`,
        }).then((res) => {
          if (res.status === 200) {
            newUsers = users.filter((u) => u.id !== id);
            setUsers(newUsers);

            Swal.fire({
              title: "حذف شد",
              text: "با موفقیت حذف شد",
              icon: "success",
              confirmButtonColor: "#1d7",
              confirmButtonText: "متوجه شدم",
            });
          } else {
            Swal.fire({
              title: "خطا!",
              text: "عملیات با خطا مواجه شد",
              icon: "error",
              confirmButtonColor: "#aaa",
              confirmButtonText: "متوجه شدم",
            });
          }
        });
      } else {
        Swal.fire({
          title: "پاک نشد",
          icon: "success",
          confirmButtonColor: "#1dd",
          confirmButtonText: "متوجه شدم",
        });
      }
    });
  };

  const handleSearch = (e) => {
    setUsers(mainUsers.filter((u) => u.name.includes(e.target.value)));
  };

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className='text-center'>مدیریت کاربران</h4>
      <div className='row my-2 mb-4 justify-content-between w-100 mx-0'>
        <div className='form-group col-10 col-md-6 col-lg-4'>
          <input type='text' className='form-control shadow' placeholder='جستجو' onChange={handleSearch} />
        </div>
        <div className='col-2 text-start px-0'>
          <Link to='/user/add'>
            <button className='btn btn-success'>
              <i className='fas fa-plus text-light'></i>
            </button>
          </Link>
        </div>
      </div>
      {users.length ? (
        <table className='table bg-light shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>نام</th>
              <th>نام کاربری</th>
              <th>ایمیل</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>
                  {/* handleNavigate(X, Y) dota moteghayer mifrestim X link jaiee ke bayad bere Y parametr ersal shode be oon Link */}
                  {/* Y kolan ye object ke dare az state: params aghaz mishe va kole sakhtaresh hamine */}
                  <i
                    onClick={() => handleNavigate(`/user/add/${u.id}`, { u })}
                    className='fas fa-edit text-warning mx-2 pointer'
                  ></i>
                  {/* jaye ':id' bayad moteghayeri bashe ke eshare dare be on task to DB ta hazf beshe */}
                  <i onClick={() => handleDelete(u.id)} className='fas fa-trash text-danger mx-2 pointer'></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className='text-primary text-center'>درحال دریافت داده ها ...</h3>
      )}
    </div>
  );
};

export default Users;
