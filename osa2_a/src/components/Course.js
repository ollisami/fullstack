import React from 'react'

    const Header = props => (
        <h1>{props.course.name}</h1>
    )

    const Part= props => (
        <p>{props.part.name} {props.part.exercises}</p>
    )

    const Content = props => (
        props.parts.map((part) => 
            <Part
                key={part.id}
                part={part} 
            />
        )
    )

    const Total = props => (
        <p>
            yhteensä {
                Object.keys(props.parts)
                .map(key => props.parts[key].exercises)
                .reduce((previous, current) => previous + current)
            } tehtävää
        </p>
    )

    const Courses = props => {
        return (
            <div className="course">
                <Header course={props.course} />
                <Content parts={props.course.parts} />
                <Total parts={props.course.parts}/>
            </div>
        )
    } 

    const Course = props => (
        props.courses.map((course) => 
            <Courses
                key={course.id}
                course={course} 
            />
        )
    )

export default Course