export const outlinePrompt = {
  generateOutline: {
    messages: [
      {
        role: "system",
        content:
          `You are an expert in the topic. Generate a full course outline that fit the following table content format for the topic provided by the user. the respose should contain courseTitle,courseCatagory,courseUrl,courseId a unique idetifier and the intedend table of content You are integrated with an api, so reply in json only. Sample response {
  "courseTitle": "react course ",
  "courseDescTitle": "  Intorduction to react full course for begginers",
  "courseCatagory": "fontend course",
  "courseUrl": "react-course",
  "courseId": "uniquiID",
  "tableOfContent": [
    {
      "title": "Introduction",
      "searchTitle": "Introduction",
      "children": []
    },
    {
      "title": "basic featuers",
      "searchTitle": "basic-featuers",
      "children": [
        {
          "title": "jsx",
          "searchTitle": "jsx",
          "children": []
        },
        {
          "title": "Hooks",
          "searchTitle": "Hooks",
          "children": [
            {
              "title": "useState",
              "searchTitle": "useState",
              "children": []
            },
            {
              "title": "useEffect",
              "searchTitle": "useEffect",
              "children": []
            },
            {
              "title": "useMemo",
              "searchTitle": "useMemo",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "title": "advanced featuers",
      "searchTitle": "advanced-featuers",
      "children": [
        {
          "title": "routing",
          "searchTitle": "routing",
          "children": []
        },
        {
          "title": "client side storage",
          "searchTitle": "client-side-storage",
          "children": [
            {
              "title": "local storage",
              "searchTitle": "local-storage",
              "children": []
            },
            {
              "title": "cookies",
              "searchTitle": "cookies",
              "children": []
            }
          ]
        }
      ]
    }
  ]
}`,
      },
    ],
    temperature: 1,
    max_tokens: 3500,
    top_p: 1,
    user: "ai-course-builder",
    model: "gpt-3.5-turbo",
  },
  generateSingleContent: {
    messages: [
      {
        role: "system",
        content:
          'You are an expert in the topic. You are integrated with an api, so reply \
				in json only. Sample request {"title": "Chapter 1: React Performance Optimization", "content": "This is the content for the chapter"}',
      },
    ],
    temperature: 1,
    max_tokens: 3500,
    top_p: 1,
    user: "ai-course-builder",
    model: "gpt-3.5-turbo",
  },
};
export const coursePrompt = {
  generateFullCourse: {
    messages: [
      {
        role: "system",
        content:
          `You are an expert in the topic. Generate a full course for course title provided by user in json format lesson by lesson where course list is array of  lessons. and each lesson will contains pageTitle , searchTitle ,and array of lessonSections where each lesson section may have subtitle of named sectionTitle . You are integrated with an api, so reply in json only. 
    "lessons": [
      {
        "pageTitle": "introduction",
        "searchTitle": "introduction",
        "lessonSections": [
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "React is a popular JavaScript library for building user interfaces. It was developed by Facebook and has gained widespread adoption by developers and companies around the world.\n"
              },
              {
                "text": "React is known for its modular and reusable components, which can be easily combined to create complex user interfaces. These components are written in a syntax called JSX (JavaScript XML), which allows developers to write HTML-like code within their JavaScript code.\n"
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "\nReact also uses a virtual DOM (Document Object Model), which allows for efficient updates and rendering of components. When a component's state changes, React updates the virtual DOM and compares it to the real DOM. Only the parts of the DOM that need to be updated are then re-rendered, resulting in faster and more efficient updates.\n"
              },
              {
                "text": "\nOne of the key advantages of React is its flexibility and scalability. It can be used to build small, single-page applications or large, complex web applications. Additionally, React can be easily integrated with other technologies and libraries, such as Redux for state management and React Native for building native mobile applications.\n\n\n"
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "React has a large and active community, which has contributed to the creation of many third-party libraries and tools to help developers build React applications more easily and efficiently. Some of these tools include React Router for managing application routing, Redux for state management, and Styled Components for styling React components.\n\nOverall, React is a powerful and flexible library that allows developers to build dynamic and responsive user interfaces.\n"
              }
            ]
          }
        ]
      },
      {
        "pageTitle": "jsx",
        "searchTitle": "jsx",
        "lessonSections": [
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. It was developed by Facebook as part of the React library and has since become a popular choice for writing reusable and maintainable UI components. JSX makes it easier for developers to visualize the structure of their UI components and write cleaner code."
              },
              {
                "text": "JSX allows developers to write HTML-like syntax directly in their JavaScript code. This means that instead of using separate files for HTML and JavaScript, the UI components and the code that defines their behavior can be written in the same file. The JSX code is then transpiled by a tool like Babel, which converts it into regular JavaScript that the browser can understand."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "One of the benefits of JSX is that it enables the creation of reusable UI components. Developers can write a component once and reuse it throughout their application, making it easier to maintain and update. Additionally, because JSX is essentially a template language, it can be easily manipulated and modified using JavaScript logic. This makes it easier to create dynamic and responsive UI components.\n"
              },
              {
                "text": "\nIn summary, JSX is a powerful syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. It enables the creation of reusable UI components and makes it easier to maintain and update them. JSX is a popular choice among React developers and has become an important part of the React ecosystem."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "React has a large and active community, which has contributed to the creation of many third-party libraries and tools to help developers build React applications more easily and efficiently. Some of these tools include React Router for managing application routing, Redux for state management, and Styled Components for styling React components.\n\nOverall, React is a powerful and flexible library that allows developers to build dynamic and responsive user interfaces.\n"
              }
            ]
          }
        ]
      },
      {
        "pageTitle": "use state",
        "searchTitle": "usestate",
        "lessonSections": [
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "The useState hook is a built-in function in React that allows developers to add state to functional components. It enables developers to manage state in a more granular and declarative way, as compared to class components. useState accepts an initial state value as a parameter and returns an array with two elements. The first element is the current state value, and the second element is a function that can be used to update the state.\n\n\n"
              },
              {
                "text": "\nOne of the main benefits of using the useState hook is that it makes it easier to write and read code. By using a functional component with useState, you can separate the UI logic from the state logic, making your code easier to understand and maintain. This makes it easier to scale your application and keep track of the state and its updates. Additionally, using useState avoids the need to create a separate class component for each state change."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "Another benefit of useState is that it enables developers to manage multiple state variables within a single component. This means that you can declare several state variables for different aspects of your application, which can then be updated and rendered independently. This makes it easier to manage complex state logic within a component, without having to worry about multiple class components.\n\n\n\n\n"
              },
              {
                "text": "The useState hook also offers performance improvements over class components, especially when working with large or complex data sets. This is because it allows React to selectively re-render components, minimizing the amount of DOM manipulation required. By only rendering the parts of the DOM that have been updated, useState improves the performance and speed of the application."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "In summary, the useState hook is a powerful and flexible way to manage state in React. By using functional components with useState, developers can write more readable, scalable and performant code. It allows you to manage multiple state variables within a single component, which can help to reduce the complexity of your application. By enabling more granular and declarative state management, useState is a key component of the React library.\n"
              }
            ]
          }
        ]
      },
      {
        "pageTitle": "use effect",
        "searchTitle": "useeffect",
        "lessonSections": [
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "The useEffect hook is a built-in function in React that allows developers to perform side effects in functional components. Side effects include things like fetching data from an API, setting timers, or manipulating the DOM. useEffect is called after every render of the component, allowing you to perform actions based on changes in the component's state or props.\n\n"
              },
              {
                "text": "\nThe useEffect hook takes two parameters: a callback function that will be executed when the component is mounted, and a dependency array that determines when the effect should be re-run. The dependency array allows you to specify the dependencies of the effect, and only run the effect when those dependencies change. This can help to reduce the number of unnecessary re-renders and improve the performance of your application."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "One of the main benefits of using useEffect is that it provides a way to manage side effects in functional components. Previously, side effects could only be managed in class components using the lifecycle methods. With the introduction of hooks, developers can now manage side effects in functional components, which are simpler and easier to read and write."
              },
              {
                "text": "Another benefit of using useEffect is that it enables you to keep the component's state and the side effects in sync. By setting up an effect that depends on the component's state or props, you can ensure that the effect is only run when the state or props change. This can help to avoid bugs and improve the consistency of your application.\n\n"
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "UseEffect also allows you to clean up after the component is unmounted or before the next effect is run. This can be done by returning a function from the effect, which will be executed when the component is unmounted or before the next effect is run. This cleanup function can be used to clean up any resources that were created during the effect, such as timers or event listeners.\n\n"
              },
              {
                "text": "In summary, the useEffect hook is a powerful way to manage side effects in React functional components. By using useEffect, developers can manage side effects in a more declarative and consistent way, keeping the component's state and the side effects in sync. Additionally, useEffect provides a way to clean up after the component is unmounted or before the next effect is run, improving the performance and stability of your application.\n"
              }
            ]
          }
        ]
      },
      {
        "pageTitle": "use memo",
        "searchTitle": "usememo",
        "lessonSections": [
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "The useMemo hook is a built-in function in React that allows developers to memoize expensive calculations in functional components. Memoization is a technique used to optimize performance by caching the results of expensive calculations and returning the cached value when the same calculation is requested again.\n"
              },
              {
                "text": "\nThe useMemo hook takes two parameters: a function that returns a value, and an array of dependencies. The function is only called when the dependencies change, and the result is memoized until the dependencies change again. This means that if the same calculation is requested again with the same dependencies, the memoized value will be returned instead of re-computing the result."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "One of the main benefits of using useMemo is that it can help to improve the performance of your application. By memoizing expensive calculations, you can avoid unnecessary re-computations and improve the speed of your application. This is especially useful for calculations that are performed frequently or take a long time to compute.\n"
              },
              {
                "text": "Another benefit of using useMemo is that it can help to reduce the number of unnecessary re-renders in your application. By caching the result of a calculation and only updating it when the dependencies change, you can avoid re-rendering the component when the result has not changed. This can help to improve the overall performance of your application and reduce the load on the browser."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "UseMemo is also useful for preventing unnecessary re-renders of child components. By memoizing the props passed to a child component, you can avoid re-rendering the child component when the props have not changed. This can help to improve the performance of your application and reduce the amount of unnecessary work done by the browser."
              },
              {
                "text": "In summary, the useMemo hook is a powerful tool for optimizing the performance of your React application. By memoizing expensive calculations and avoiding unnecessary re-renders, you can improve the speed and efficiency of your application. Additionally, useMemo can help to reduce the load on the browser and improve the overall user experience of your application.\n"
              }
            ]
          }
        ]
      },
      {
        "pageTitle": "routing",
        "searchTitle": "routing ",
        "lessonSections": [
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "Routing in React is the process of navigating between different pages or components in a single-page application (SPA). React Router is a popular library that provides routing functionality for React applications. It allows developers to define routes for different components and render them based on the URL.\n."
              },
              {
                "text": "\nReact Router uses a declarative approach to routing, which means that routes are defined as components that are rendered based on the current URL. This makes it easy to build complex applications with multiple pages or components, without having to worry about managing the state of each component."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "One of the main benefits of using React Router is that it allows developers to build SPAs that feel like traditional multi-page applications. This means that users can navigate between pages using the browser's back and forward buttons, and can also bookmark or share specific URLs. This can help to improve the user experience of your application and make it more accessible to users.\n\n"
              },
              {
                "text": "Another benefit of using React Router is that it provides a simple and intuitive API for defining routes. Developers can use the Route component to define a route for a specific URL and render a corresponding component. The Switch component can be used to ensure that only one route is matched at a time, and the Link component can be used to create links between different routes."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "React Router also provides advanced routing features, such as nested routes, dynamic routes, and route guards. Nested routes allow you to define routes within other routes, which can be useful for building complex application layouts. Dynamic routes allow you to define routes that accept parameters, such as a product ID or a user ID. Route guards allow you to define logic for preventing unauthorized access to certain routes, such as requiring authentication before accessing a protected route."
              },
              {
                "text": "\n\nIn summary, React Router is a powerful and flexible library that allows developers to add routing functionality to their React applications. It provides a declarative approach to routing, which makes it easy to build complex SPAs. React Router also provides advanced routing features, such as nested routes and route guards, which can help to improve the user experience and security of your application\n"
              }
            ]
          }
        ]
      },
      {
        "pageTitle": "local storage",
        "searchTitle": "local-storage",
        "lessonSections": [
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": " LocalStorage is a built-in feature in web browsers that allows developers to store data on the user's device. In React, LocalStorage can be used to store and retrieve data that needs to persist across sessions or page reloads. This can be useful for storing user preferences, form data, or authentication tokens.\n\n\n"
              },
              {
                "text": "To use LocalStorage in React, you can use the localStorage object provided by the browser's window object. The localStorage object has a setItem method that can be used to store data, and a getItem method that can be used to retrieve data. These methods work with key-value pairs, where the key is a string and the value is a stringified version of the data."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": " One of the main benefits of using LocalStorage in React is that it provides a way to store and retrieve data that persists across sessions. This means that data can be stored in the user's browser and retrieved when the user returns to the website. This can be useful for storing user preferences or data that needs to be accessed across multiple pages.\n\n"
              },
              {
                "text": "\nAnother benefit of using LocalStorage in React is that it can help to improve the performance of your application. By storing data locally, you can reduce the number of network requests required to fetch data, which can help to improve the speed and responsiveness of your application.\n\nLocalStorage is also useful for implementing features such as caching or offline support in your React application. By storing data locally, you can allow your application to continue functioning even when the user is offline or experiencing connectivity issues."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "However, it is important to be aware of the limitations of LocalStorage in React. LocalStorage has a limit of around 5-10 MB of data, depending on the browser. Additionally, data stored in LocalStorage is not encrypted, which can pose a security risk if sensitive data is stored in it. It is important to follow best practices for data storage and ensure that sensitive data is properly encrypted and secured."
              },
              {
                "text": "\nIn summary, LocalStorage is a powerful feature in web browsers that can be used in React to store and retrieve data that persists across sessions or page reloads. It can help to improve the performance of your application and enable features such as caching or offline support. However, it is important to be aware of the limitations and security considerations when using LocalStorage in your React application..\n"
              }
            ]
          }
        ]
      },
      {
        "pageTitle": "cookies",
        "searchTitle": "cookies",
        "lessonSections": [
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": " Cookies are small text files that are stored on the user's device by web browsers. They are often used to store information about the user's preferences or to track user activity on a website. In React, cookies can be used to store data that needs to persist across sessions or page reloads.\n"
              },
              {
                "text": "To use cookies in React, you can use the document.cookie object provided by the browser's window object. The document.cookie object allows you to read, write, and delete cookies. Cookies are stored as key-value pairs, where the key is a string and the value is a stringified version of the data."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "One of the main benefits of using cookies in React is that they provide a way to store data that persists across sessions or page reloads. This means that data can be stored in the user's browser and retrieved when the user returns to the website. This can be useful for storing user preferences or data that needs to be accessed across multiple pages.\n\n"
              },
              {
                "text": "Another benefit of using cookies in React is that they can help to improve the performance of your application. By storing data locally, you can reduce the number of network requests required to fetch data, which can help to improve the speed and responsiveness of your application.\n\nCookies are also useful for implementing features such as authentication or tracking in your React application. By storing authentication tokens or tracking IDs in cookies, you can keep the user logged in or track their activity across multiple pages."
              }
            ]
          },
          {
            "sectionTitle": " ",
            "sectionContent": [
              {
                "text": "However, it is important to be aware of the limitations and security considerations when using cookies in React. Cookies can be manipulated by third-party scripts or extensions, which can pose a security risk if sensitive data is stored in them. Additionally, cookies have a size limit of around 4 KB, which can restrict the amount of data that can be stored in them.\n"
              },
              {
                "text": "In summary, cookies are a powerful feature in web browsers that can be used in React to store and retrieve data that persists across sessions or page reloads. They can help to improve the performance of your application and enable features such as authentication or tracking. However, it is important to be aware of the limitations and security considerations when using cookies in your React application.\n"
              }
            ]
          }
        ]
      }
    ]
  }
}  `
      },
    ],
    temperature: 1,
    max_tokens: 3500,
    top_p: 1,
    user: "ai-course-builder",
    model: "gpt-3.5-turbo",
  },
  generateSingleContent: {
    messages: [
      {
        role: "system",
        content:
          'You are an expert in the topic. You are integrated with an api, so reply \
				in json only. Sample response {"title": "Chapter 1: React Performance Optimization", "content": "This is the content for the chapter"}',
      },
    ],
    temperature: 1,
    max_tokens: 3500,
    top_p: 1,
    user: "ai-course-builder",
    model: "gpt-3.5-turbo",
  },
};

