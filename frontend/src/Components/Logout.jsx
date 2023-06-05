import React, { useState } from 'react';
import { UserAuth, logout } from "../utils/Auth";
import { useNavigate } from "react-router-dom";



export const Logout = () => {

	const navigate = useNavigate();

	const handleLogout = async (e) => {
		e.preventDefault();
		try {
			await logout()
			navigate('/')
		} catch (error) {
			console.log(error);
		}
	};

	return handleLogout();

};

export default Logout;
