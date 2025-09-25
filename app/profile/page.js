"use client";
import React from 'react'
import {useSearchParams} from 'next/navigation'

export default function Profile() {
    const parameters = useSearchParams();
    const email = parameters.get('emailKey');
    const password = parameters.get('passwordKey')
  return (
    <div>
        <div>{email}</div>
    <div>{password}</div>
    </div>
  )
}
