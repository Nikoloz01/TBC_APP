import React from 'react';

export default function Main() {

    const firstImage = "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png";
    const secondImage = "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png";



    return (



        <div className="container">

            <div className="heading">
                <h1>What Is a React</h1>

            </div>
            <div className="box-wrapper">
                <div className="box second">
                    <img src={firstImage} alt="firstImage" />
                    <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in
                        isolation and return HTML.
                    </p>

                </div>

                <div className="box second">
                    <img src={secondImage} alt="secondImage" />
                    <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it
                        easy to create components and write code ...
                    </p>
                </div>


                <div className="box third">
                    <img src={secondImage} alt="" />
                    <p>Array Methods. You ll encounter arrays several times while working on React projects. An array is a collection of data.
                        You store data in arrays, so you can
                    </p>
                </div>

                <div className="box third hide">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="" />
                    <p>React Props. Props stand for Properties. They are read-only components. It is an object which stores the value

                    </p>
                </div>

                <div className="box second hide">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="" />
                    <p>Overall, hooks are a powerful addition to React that simplify component logic, promote code reusability, and improve
                    </p>
                </div>

                <div className="box second hide">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="" />
                    <p>Overall, hooks are a powerful addition to React that simplify component logic, promote code reusability, and improve

                    </p>
                </div>


            </div>
        </div>

    )
}