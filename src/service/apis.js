import React, {useEffect, useState} from 'react';
import {create} from "apisauce";

const baseUrl = 'http://127.0.0.1:4000';

const api = create({
    baseURL: baseUrl
})

export const useAPIs = () => {
    const updateConfig = async (data) => {
        api.post('/api/updateConfig', data).then((res) => {
            console.log("res", res);
            alert("Update config success!")
        }).catch(err => console.log(err))
    }
    return {
        updateConfig
    }
}