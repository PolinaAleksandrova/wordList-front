import React from 'react';
import "../mainCourses/style.css";
import "../mainCourses/las vegas.jpg"
import "../mainCourses/newyork.jpg"
import "../mainCourses/singapore.jpg"
import { Component } from 'react';
class MainCourses extends Component{
render(){
    return(
        <div class="card">
  <div class="card-content">
    <h2 class="card-title">Something awsome</h2>
    <p class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
    <a href="#" class="button">Learn More</a>
  </div>
</div>
    );
}
}

export default MainCourses;