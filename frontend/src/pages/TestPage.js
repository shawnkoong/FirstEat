import React, { useEffect } from 'react';
import { getRestaurants } from '../api/server';

export const TestPage = () => {

    useEffect(() => {
        try {
            getRestaurants().then((data) => {
                console.log(data);
            })
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <div>
            testing...
        </div>
    )
}