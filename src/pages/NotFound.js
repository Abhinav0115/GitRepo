import React from "react";

export default function NotFound() {
    return (
        <div id="error-page" className="h-100">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* <i>{error.status + " " + error.statusText || error.message}</i> */}
            </p>
        </div>
    );
}
