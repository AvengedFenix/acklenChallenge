import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Explore from "./../components/Explore";
import Task from './../components/Task';


const Index = () => {
	return (
		<div className="projects-container">
			{tasks.map((task) => {
        return (<Task title={task.title}></Task>)
      })}
		</div>
	);
};

Index.getInitialProps = async () => {
	const res = await fetch("https://localhost:3000/api/Tasks");
	const { data } = await res.json();

	return { tasks: data };
};

export default Index;
