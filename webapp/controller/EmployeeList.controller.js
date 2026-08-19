
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/format/DateFormat"
    
], (
    Controller,
    MessageToast,
    MessageBox,
    Filter,
    FilterOperator,
    DateFormat
) => {
    "use strict";

    return Controller.extend(
        "zcj.employee.management.employeemanagement.controller.EmployeeList",
        {

            onInit() {
                this._oSelectedEmployee = null;
            },
           



            // ==============================
            // CREATE
            // ==============================

            onOpenCreateDialog() {

                this.byId("employeeIdInput").setValue("");
                this.byId("employeeNameInput").setValue("");
                this.byId("employeeEmailInput").setValue("");
                this.byId("employeeDepartmentInput").setValue("");
                this.byId("employeeJoiningDateInput").setValue("");

                this.byId("createEmployeeDialog").open();
            },


            onCancelCreate() {

                this.byId("createEmployeeDialog").close();

            },


            onCreateEmployee() {

                const oView = this.getView();

                const sEmployeeId =
                    oView.byId("employeeIdInput").getValue().trim();

                const sName =
                    oView.byId("employeeNameInput").getValue().trim();

                const sEmail =
                    oView.byId("employeeEmailInput").getValue().trim();

                const sDepartment =
                    oView.byId("employeeDepartmentInput").getValue().trim();

                const sJoiningDate =
                    oView.byId("employeeJoiningDateInput").getValue();


                if (
                    !sEmployeeId ||
                    !sName ||
                    !sEmail ||
                    !sDepartment ||
                    !sJoiningDate
                ) {

                    MessageBox.error(
                        "Please fill all employee fields."
                    );

                    return;
                }


                const oEmployee = {
                    employee_id: sEmployeeId,
                    name: sName,
                    email: sEmail,
                    department: sDepartment,
                    joining_date: sJoiningDate
                };


                const oTable =
                    oView.byId("employeeTable");

                const oBinding =
                    oTable.getBinding("items");


                oBinding.create(oEmployee);

                MessageToast.show(
                    "Employee creation requested."
                );

                this.byId("createEmployeeDialog").close();
            },


            // ==============================
            // UPDATE
            // ==============================

            onOpenEditDialog(oEvent) {

                const oContext =
                    oEvent.getSource().getBindingContext();

                if (!oContext) {
                    MessageBox.error(
                        "Employee data could not be found."
                    );
                    return;
                }

                this._oSelectedEmployee = oContext;


                const oEmployee =
                    oContext.getObject();


                this.byId("editEmployeeIdInput")
                    .setValue(oEmployee.employee_id);

                this.byId("editEmployeeNameInput")
                    .setValue(oEmployee.name);

                this.byId("editEmployeeEmailInput")
                    .setValue(oEmployee.email);

                this.byId("editEmployeeDepartmentInput")
                    .setValue(oEmployee.department);

                this.byId("editEmployeeJoiningDateInput")
                    .setValue(oEmployee.joining_date);


                this.byId("editEmployeeDialog").open();
            },


            onCancelEdit() {

                this.byId("editEmployeeDialog").close();

                this._oSelectedEmployee = null;
            },


            onUpdateEmployee() {

                if (!this._oSelectedEmployee) {

                    MessageBox.error(
                        "No employee selected."
                    );

                    return;
                }


                const sName =
                    this.byId("editEmployeeNameInput")
                        .getValue()
                        .trim();

                const sEmail =
                    this.byId("editEmployeeEmailInput")
                        .getValue()
                        .trim();

                const sDepartment =
                    this.byId("editEmployeeDepartmentInput")
                        .getValue()
                        .trim();

                const sJoiningDate =
                    this.byId("editEmployeeJoiningDateInput")
                        .getValue();


                if (
                    !sName ||
                    !sEmail ||
                    !sDepartment ||
                    !sJoiningDate
                ) {

                    MessageBox.error(
                        "Please fill all employee fields."
                    );

                    return;
                }


                this._oSelectedEmployee.setProperty(
                    "name",
                    sName
                );

                this._oSelectedEmployee.setProperty(
                    "email",
                    sEmail
                );

                this._oSelectedEmployee.setProperty(
                    "department",
                    sDepartment
                );

                this._oSelectedEmployee.setProperty(
                    "joining_date",
                    sJoiningDate
                );


                this.byId("editEmployeeDialog").close();

                MessageToast.show(
                    "Employee updated successfully."
                );

                this._oSelectedEmployee = null;
            },


            // ==============================
            // DELETE
            // ==============================

            onDeleteEmployee(oEvent) {

                const oContext =
                    oEvent.getSource().getBindingContext();

                if (!oContext) {

                    MessageBox.error(
                        "Employee data could not be found."
                    );

                    return;
                }


                const oEmployee =
                    oContext.getObject();

                const sEmployeeId =
                    oEmployee.employee_id;


                MessageBox.confirm(
                    "Delete employee " +
                    sEmployeeId +
                    "?",
                    {
                        title: "Confirm Delete",

                        onClose: (sAction) => {

                            if (
                                sAction ===
                                MessageBox.Action.OK
                            ) {

                                oContext.delete();

                                MessageToast.show(
                                    "Employee deleted."
                                );
                            }
                        }
                    }
                );
            },
                        // ==============================
            // LEAVE FILTER
            // ==============================
            onLeaveFilterChange(oEvent) {

    const oItem = oEvent.getParameter("item");

    if (!oItem) {
        return;
    }

    const sKey = oItem.getKey();

    const oTable = this.byId("leaveTable");

    const oBinding = oTable.getBinding("items");

    if (!oBinding) {
        return;
    }

    if (sKey === "ALL") {

        oBinding.filter([]);

    } else {

        const oFilter = new Filter(
            "Status",
            FilterOperator.EQ,
            sKey
        );

        oBinding.filter([oFilter]);
    }
},

// ==============================
// LEAVE FILTER
// ==============================




// ==============================
// OPEN LEAVE DIALOG
// ==============================

onOpenLeaveDialog() {

    this.byId("leaveEmployeeIdInput").setValue("");
    this.byId("leaveFromDateInput").setValue("");
    this.byId("leaveToDateInput").setValue("");
    this.byId("leaveReasonInput").setValue("");

    this.byId("leaveDialog").open();
},
onApplyLeave() {

    const oView = this.getView();

    const sEmployeeId =
        oView.byId("leaveEmployeeIdInput").getValue().trim();

    const oFromDate =
        oView.byId("leaveFromDateInput").getDateValue();

    const oToDate =
        oView.byId("leaveToDateInput").getDateValue();

    const sReason =
        oView.byId("leaveReasonInput").getValue().trim();


    // ==============================
    // VALIDATION
    // ==============================

    if (
        !sEmployeeId ||
        !oFromDate ||
        !oToDate ||
        !sReason
    ) {

        MessageBox.error(
            "Please fill all leave application fields."
        );

        return;
    }


    // ==============================
    // DATE VALIDATION
    // ==============================

    if (oFromDate > oToDate) {

        MessageBox.error(
            "From Date cannot be later than To Date."
        );

        return;
    }


    // ==============================
    // FORMAT DATE FOR ODATA
    // ==============================

    const oDateFormat =
        DateFormat.getDateInstance({
            pattern: "yyyy-MM-dd"
        });

    const sFromDate =
        oDateFormat.format(oFromDate);

    const sToDate =
        oDateFormat.format(oToDate);


    // ==============================
    // CREATE LEAVE OBJECT
    // ==============================

    const oLeave = {

        LeaveId: "L" + Date.now().toString().slice(-9),

        EmployeeId: sEmployeeId,

        FromDate: sFromDate,

        ToDate: sToDate,

        Reason: sReason,

        Status: "PENDING"
    };


    // ==============================
    // GET TABLE BINDING
    // ==============================

    const oTable =
        oView.byId("leaveTable");

    const oBinding =
        oTable.getBinding("items");


    if (!oBinding) {

        MessageBox.error(
            "Leave table binding could not be found."
        );

        return;
    }


    // ==============================
    // CREATE ODATA ENTITY
    // ==============================

    const oContext =
        oBinding.create(oLeave);


    // ==============================
    // WAIT FOR BACKEND RESPONSE
    // ==============================

    oContext.created().then(() => {

        MessageToast.show(
            "Leave application submitted successfully."
        );

        this.byId("leaveDialog").close();

        // Refresh table
        oBinding.refresh();

    }).catch((oError) => {

        MessageBox.error(
            "Failed to submit leave application.\n\n" +
            oError.message
        );

    });
},


// ==============================
// CANCEL LEAVE DIALOG
// ==============================

onCancelLeave() {

    this.byId("leaveDialog").close();

},
onApproveLeave(oEvent) {

    const oContext =
        oEvent.getSource().getBindingContext();

    if (!oContext) {
        MessageBox.error(
            "Leave application could not be found."
        );
        return;
    }

    const oLeave = oContext.getObject();

    MessageBox.confirm(
        "Approve leave for " +
        oLeave.EmployeeId +
        "?",
        {
            title: "Approve Leave",

            onClose: async (sAction) => {

                if (sAction !== MessageBox.Action.OK) {
                    return;
                }

                try {

                    const oModel =
                        oContext.getModel();

                    const oAction =
                        oModel.bindContext(
                            "com.sap.gateway.srvd_a2x.zcj_sd_employee.v0001.approve(...)",
                            oContext
                        );

                    await oAction.execute();

                    MessageToast.show(
                        "Leave approved successfully."
                    );

                    oModel.refresh();

                } catch (oError) {

                    MessageBox.error(
                        "Failed to approve leave:\n\n" +
                        oError.message
                    );
                }
            }
        }
    );
},
onRejectLeave(oEvent) {

    const oContext =
        oEvent.getSource().getBindingContext();

    if (!oContext) {
        MessageBox.error(
            "Leave application could not be found."
        );
        return;
    }

    const oLeave = oContext.getObject();

    MessageBox.confirm(
        "Reject leave for " +
        oLeave.EmployeeId +
        "?",
        {
            title: "Reject Leave",

            onClose: async (sAction) => {

                if (sAction !== MessageBox.Action.OK) {
                    return;
                }

                try {

                    const oModel =
                        oContext.getModel();

                    const oAction =
                        oModel.bindContext(
                            "com.sap.gateway.srvd_a2x.zcj_sd_employee.v0001.reject(...)",
                            oContext
                        );

                    await oAction.execute();

                    MessageToast.show(
                        "Leave rejected successfully."
                    );

                    oModel.refresh();

                } catch (oError) {

                    MessageBox.error(
                        "Failed to reject leave:\n\n" +
                        oError.message
                    );
                }
            }
        }
    );
},
           

        }
    );
});