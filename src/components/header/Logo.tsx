import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../../style/header.module.scss'
import logo from '../../public/logo.svg'
import { ILogo } from '../../interfaces/header_interface'

/**
 * @param logotext text of logo.
 * @returns div with nested NavLink tags. One of them takes `logotext`.
 */
export const Logo: React.FC<ILogo> = ({logotext}) => (
  <div className={style.logo}>
    <NavLink className={style.img} to="./"><img src={logo} alt="logo the app"/></NavLink>
    <NavLink className={style.txt} to="./"><span>{logotext}</span></NavLink>
  </div>
)