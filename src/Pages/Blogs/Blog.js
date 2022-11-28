import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
            <div className="font-bold text-3xl text-dark text-center py-3 md:w-1/5 mx-auto my-6  p-4">Questions task</div>
            <div className="card mx-2 mx-2 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">1. What are the different ways to manage a state in a React application?</h2>
                    <p className='font-bold'> <strong>Answer:</strong> Managing state in your React apps isn’t as simple as using useState or useReducer</p>
                    <p>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose? <br />
                    In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                    <br />When we talk about state in our applications, it’s important to be clear about what types of state actually matter.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                    </p>
                </div>
            </div>
            <div className="card mx-2 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">2. How does prototypical inheritance work?</h2>
                    <p><strong>Answer:</strong>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className="card mx-2 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">3.What is a unit test? Why should we write unit tests?</h2>
                    <p><strong>Answer:</strong> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="card mx-2 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">4. React vs. Angular vs. Vue</h2>
                    <div className='grid lg:grid-cols-3'>
                        <p className='border border-black p-2'>
                            <strong className='text-red-600 font-bold'>Angular,</strong> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                        </p>
                        <p className='border border-black p-2'>
                            <strong className='text-red-600 font-bold'>Vue,</strong> also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.Further reading: Vue.js Tutorial for Beginner Developers
                        </p>
                        <p className='border border-black p-2'>
                        <strong className='text-red-600 font-bold'>React,</strong>React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;