import { jpApi } from "../jpApi";

export const getAllUsers = async () => {
    const res = await jpApi.get("/users");
    if (res) {
        return res;
    };
};