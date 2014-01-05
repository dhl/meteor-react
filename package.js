Package.describe({
    summary: "React is a JavaScript library for building user interfaces."
});

var reactToolsVersion = "0.8.0";

Npm.depends({
    "react-tools": reactToolsVersion,
    "react": reactToolsVersion
});

Package._transitional_registerBuildPlugin({
    name: "compileJSX",
    use: [],
    sources: [
        "plugin/compile-jsx.js"
    ],
    npmDependencies: {
        "react-tools": reactToolsVersion
    }
});

Package.on_use(function (api, where) {
    api.add_files("lib/react-with-addons-" + reactToolsVersion + ".js", "client");
    api.add_files("lib/require-react.js", "server");
    api.export("React", "server");

    api.add_files("react.js", ["client", "server"]);
    api.export("MeteorMixin", ["server", "client"]);
});
