import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Name = (props) => {

        const persons = props.persons
        const searchName = props.searchName
        const searchFunc = props.searchFunc

        const cs = props.currsearch
        let myarr = []

	//return "FOOOO"
	if (props.perso === undefined) { return "TYYHJÄÄ TÄYNÄ" }
        if (cs === "") myarr = props.perso
        else {

                //console.log("props: ", props)
                props.perso.map((item, index) => {
                        //console.log("NAME: ", item)
                        //console.log("NAME2: " , index)
                        if (item["name"].includes(cs)) {
                                console.log("item name: ", item["name"])
                                console.log("cs: " , cs)
                        } else {
                                console.log("item name: ", item["name"])
                                console.log("cs: " , cs)
                                myarr.push({name: item["name"], number: item["number"]})
                        }
                })
        }

        return (
                <ol>
                {myarr.map((item, index) => (
                        <li>{item["name"]}: {item["number"]}</li>
                ))}
                </ol>
        )
}

export default Name
