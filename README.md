# Employee Management System

An end-to-end Employee Management System developed using **SAP ABAP RAP, ABAP CDS, OData V4, SAP HANA, SAPUI5, and SAP Business Application Studio**.

The application provides employee lifecycle management and a leave application workflow where users can create, update, delete, and view employees, while leave applications can be submitted, reviewed, approved, or rejected based on their current status.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Project Objectives](#-project-objectives)
- [Application Features](#-application-features)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Backend Architecture](#-backend-architecture)
- [CDS Data Model](#-cds-data-model)
- [RAP Behavior](#-rap-behavior)
- [Leave Approval Workflow](#-leave-approval-workflow)
- [OData V4 Service](#-odata-v4-service)
- [Frontend Architecture](#-frontend-architecture)
- [Employee Management](#-employee-management)
- [Leave Management](#-leave-management)
- [Validation and Business Rules](#-validation-and-business-rules)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Testing](#-testing)
- [Local Development](#-local-development)
- [Build](#-build)
- [Important SAP Objects](#-important-sap-objects)
- [Technical Highlights](#-technical-highlights)
- [Challenges Solved](#-challenges-solved)
- [Future Enhancements](#-future-enhancements)
- [Learning Outcomes](#-learning-outcomes)
- [Author](#-author)

---

# 📌 Project Overview

The **Employee Management System** is a full-stack SAP application designed to manage employee information and employee leave applications.

The project was developed using the **ABAP RESTful Application Programming Model (RAP)** for the backend and **SAPUI5** for the frontend.

The frontend communicates with the SAP backend through an **OData V4 service**.

The application contains two major functional areas:

### Employee Management

Users can:

- Create employees
- View employees
- Update employee information
- Delete employees

### Leave Management

Users can:

- Create leave applications
- View leave applications
- Filter leaves based on status
- Approve pending leaves
- Reject pending leaves
- View granted leaves
- View rejected leaves

The leave workflow is status-driven. Approval and rejection actions are available only while a leave application is in the `PENDING` state.

---

# 🎯 Project Objectives

The main objective of this project was to develop a complete business application using modern SAP development technologies.

The project demonstrates:

- SAP ABAP RAP development
- ABAP CDS data modeling
- RAP behavior definitions
- RAP actions
- OData V4 service exposure
- SAPUI5 application development
- Frontend-backend integration
- SAP HANA persistence
- CRUD operations
- Business workflow implementation
- Status-based UI behavior
- Git and GitHub based project management

---

# ✨ Application Features

## 👨‍💼 Employee Management

The employee management section provides complete CRUD functionality.

### Create Employee

A new employee can be created by entering the required employee information.

The employee information includes:

- Employee ID
- Name
- Email
- Department
- Joining Date

---

### View Employees

The employee list displays the available employee records.

The application retrieves the data from the SAP backend through the OData V4 service.

---

### Update Employee

Existing employee information can be modified.

The employee ID is used to identify the employee record while the other editable information can be updated.

---

### Delete Employee

Employees can be deleted from the system after performing the required delete operation.

---

# 🏖️ Leave Management

The application contains a dedicated leave management section.

A user can create a leave application by providing:

- Employee ID
- From Date
- To Date
- Reason

Every newly created leave application starts with:

```text
PENDING
