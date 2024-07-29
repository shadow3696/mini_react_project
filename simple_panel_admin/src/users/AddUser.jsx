import React, { useState } from "react";
import style from "../style.module.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { setEditUser, setNewUser } from "../services/userService";

const AddUser = () => {
  const { userId } = useParams(); // baraye gereftan parametry ke az Link dare mirese

  // inja kole harchi ke beshe ro avordam testi
  const { state, hash, key, pathname, search } = useLocation(); // state baraye gereftan params ke dare ba moteghyer dovom miad
  const navigate = useNavigate();

  const handleNavigate = (address) => {
    navigate(address);
  };

  //
  // modeli ke basaki gofte ke miad az axios dade haro migire ta estefade kone ama man az dade haiee
  // ke ghablan gerefte bodam estefade kardam ba ravesh parametr "state" ke az useLocation() miad
  /*
    useEfect(()=>{
        axios.get(`/users/${userId}`).then(res=>{
            setData({
                name: state?.u.name,
                username: state?.u.username,
                email: state?.u.email,
                address: {
                    street: state?.u.address.street,
                    city: state?.u.address.city,
                    suite: state?.u.address.suite,
                    zipcode: state?.u.address.zipcode
                    }
                });
            });
        },[]);
    */

  const [data, setData] = useState({
    name: state?.u.name,
    username: state?.u.username,
    email: state?.u.email,
    address: {
      street: state?.u.address.street,
      city: state?.u.address.city,
      suite: state?.u.address.suite,
      zipcode: state?.u.address.zipcode,
    },
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!userId) {
      setNewUser(data);
    } else {
      setEditUser(data, userId);
    }
  };

  return (
    <div className={`${style.item_content} mt-5 p-4 container container-fluid`}>
      <h4 className='text-center text-primary'>{userId ? "ویرایش کاربر" : "افزودن کاربر"}</h4>
      <div className='row justify-content-center mt-5'>
        <form className='col-12 col-md-6 bg-light rounded shadow-lg p-3'>
          <div className='mb-3'>
            <lable className='form-label'>نام و نام خوانوادگی</lable>
            <input
              className='form-control'
              placeholder='نام و نام خوانوادگی'
              type='text'
              defaultValue={data?.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <lable className='form-label'>نام کاربری</lable>
            <input
              className='form-control'
              placeholder='نام مستعار'
              type='text'
              defaultValue={data?.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <lable className='form-label'>ایمیل</lable>
            <input
              className='form-control'
              placeholder='ایمیل'
              type='text'
              defaultValue={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <lable className='form-label'>آدرس</lable>
            <div className='row'>
              <div className='col-6 my-1'>
                <input
                  type='text'
                  placeholder='شهر'
                  className='form-control'
                  defaultValue={data.address.city}
                  onChange={(e) => setData({ ...data, address: { ...data, city: e.target.value } })}
                />
              </div>
              <div className='col-6 my-1'>
                <input
                  type='text'
                  placeholder='خیابان'
                  className='form-control'
                  defaultValue={data.address.street}
                  onChange={(e) => setData({ ...data, address: { ...data, street: e.target.value } })}
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-6 my-1'>
                <input
                  type='text'
                  placeholder='ادامه آدرس'
                  className='form-control'
                  defaultValue={data.address.suite}
                  onChange={(e) => setData({ ...data, address: { ...data, suite: e.target.value } })}
                />
              </div>
              <div className='col-6 my-1'>
                <input
                  type='text'
                  placeholder='کد پستی'
                  className='form-control'
                  defaultValue={data.address.zipcode}
                  onChange={(e) => setData({ ...data, address: { ...data, zipcode: e.target.value } })}
                />
              </div>
            </div>
          </div>

          <div className='col-12 text-start'>
            <button onClick={() => handleNavigate(-1)} type='button' className='btn btn-danger ms-2'>
              بازگشت
            </button>
            <button type='submit' onClick={(e) => handleAddUser(e)} className='btn btn-primary'>
              {userId ? "ویرایش" : "افزودن"}
            </button>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default AddUser;
