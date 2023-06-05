Steps:

cd into react-youtube directory.

do npm install to get dependencies.

To Start server for react app:

    This project uses Vite to make web servers. 

    The comand to spin up a server for this is:

        "npm run dev" 
    
    without quotes.

    ADDING FILES

    Git does the tracking for this inside the react-youtube directory.

    If you place files outside of this directory, Git will not see them and 
    they will not be tracked.

                Notes on Folders

        node_modules: this is where third party libraries live.

        public: where public assets of your website exist.

        src: where the source code of your application lives.

        index.html: a basic HTML template. 
        Has a div element with the id 'root' which is the container of our application.

        The script tag is the entry point of our application, with the src value of
        "/src/main.tsx"

        package.json: Gives information about the project.

            scripts

            dependencies

            version info
        
        tsconfig.json

            tells typescript compiler how we wish our code to be compiled.

        vite.config.ts