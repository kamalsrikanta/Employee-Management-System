sap.ui.define([], function () {
    "use strict";

    return {

        showLeaveActions: function (sStatus) {
            return sStatus === "PENDING";
        }

    };
});