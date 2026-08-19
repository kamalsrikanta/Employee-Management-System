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
🏗️ System Architecture

The project follows an end-to-end SAP application architecture.

┌───────────────────────────────────────────────┐
│                  SAPUI5 UI                    │
│                                               │
│  Employee Management                          │
│  Leave Management                             │
│  Create / Update / Delete                     │
│  Approve / Reject                             │
└──────────────────────┬────────────────────────┘
                       │
                       │ OData V4
                       ▼
┌───────────────────────────────────────────────┐
│               SAP RAP Service                 │
│                                               │
│             ZCJ_SD_EMPLOYEE                   │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│             RAP Business Objects              │
│                                               │
│              ZCJ_I_EMPLOYEE                   │
│              ZCJ_I_LEAVE                      │
│                                               │
│        CRUD + Business Actions                │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│                 ABAP CDS                      │
│                                               │
│              Data Modeling                    │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│                 SAP HANA                      │
│                                               │
│             ZCJ_EMPLOYEE                      │
│             ZCJ_LEAVE                         │
└───────────────────────────────────────────────┘





🛠️ Technology Stack


| Layer                   | Technology                      |
| ----------------------- | ------------------------------- |
| Frontend                | SAPUI5                          |
| Backend                 | SAP ABAP RAP                    |
| Data Modeling           | ABAP CDS                        |
| API                     | OData V4                        |
| Database                | SAP HANA                        |
| Cloud Platform          | SAP BTP ABAP Environment        |
| Development Environment | SAP Business Application Studio |
| Backend Development     | ABAP Development Tools          |
| Version Control         | Git                             |
| Repository              | GitHub                          |
| UI Framework            | SAPUI5                          |
| UI Theme                | SAP Horizon                     |
| Build Tool              | UI5 CLI                         |
| API Testing             | Postman / OData testing         |



⚙️ Backend Architecture

The backend is implemented using the ABAP RESTful Application Programming Model (RAP).

The RAP implementation is divided into multiple layers.

Database Table
      ↓
CDS View Entity
      ↓
Behavior Definition
      ↓
Service Definition
      ↓
Service Binding
      ↓
OData V4
      ↓
SAPUI5


👨‍💼 Employee Management Flow

The employee CRUD flow works as follows:
                Employee Management
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
      CREATE         UPDATE         DELETE
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                  OData V4
                       ▼
                      RAP
                       ▼
                   SAP HANA

🏖️ Leave Management Flow

The leave management flow is:

Create Leave
     ↓
PENDING
     ↓
┌────┴─────┐
│          │
▼          ▼
Approve    Reject
│          │
▼          ▼
GRANTED    REJECTED

The UI automatically adapts according to the leave status.


**📁 Project Structure
**Employee-Management-System/
│
├── backend/
│   │
│   ├── cds/
│   │   ├── ZCJ_I_EMPLOYEE.txt
│   │   └── ZCJ_I_LEAVE.txt
│   │
│   ├── behavior/
│   │   ├── ZCJ_I_EMPLOYEE.txt
│   │   └── ZCJ_I_LEAVE.txt
│   │
│   └── service/
│       └── ZCJ_SD_EMPLOYEE.txt
│
├── screenshots/
│   ├── 01.Employeee Management.jpeg
│   ├── 02.Employee List.jpeg
│   ├── 03.Create Employee Operation.jpeg
│   ├── 04.Leave Application Management.jpeg
│   ├── 05.Create Operation.jpeg
│   ├── 06.Actions on Pending Leaves.jpeg
│   ├── 07.Rejected Leaves.jpeg
│   ├── 08.Granted Leaves.jpeg
│   ├── 09.Update Employee Operation.jpeg
│   └── 10.Delete Employee Operation.jpeg
│
├── webapp/
│   │
│   ├── controller/
│   │   ├── App.controller.js
│   │   └── EmployeeList.controller.js
│   │
│   ├── view/
│   │   ├── App.view.xml
│   │   └── EmployeeList.view.xml
│   │
│   ├── model/
│   │   ├── models.js
│   │   └── formatter.js
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── i18n/
│   │   └── i18n.properties
│   │
│   ├── localService/
│   │   └── mainService/
│   │       └── metadata.xml
│   │
│   ├── test/
│   │   ├── integration/
│   │   └── unit/
│   │
│   ├── Component.js
│   ├── index.html
│   └── manifest.json
│
├── .gitignore
├── .appGenInfo.json
├── eslint.config.mjs
├── package.json
├── package-lock.json
├── ui5.yaml
├── ui5-local.yaml
├── ui5-mock.yaml
└── README.md










🌱 Future Enhancements

The application can be extended further with:

Role-based authorization
Manager-specific leave approval
Employee search
Advanced employee filtering
Leave balance management
Leave history
Email notifications
Approval notifications
Audit logs
Dashboard and analytics
Pagination
Additional automated tests
CI/CD integration
Production deployment
💡 Challenges Solved During Development

Several practical development challenges were addressed during the implementation.

OData V4 Integration

The SAPUI5 frontend was connected to the RAP backend through an OData V4 service.

CSRF Token Handling

API testing and create operations required understanding CSRF protection when working with SAP OData services.

RAP Actions

Custom leave approval and rejection actions were exposed through the RAP behavior and consumed from the UI.

Conditional UI Actions

The approve/reject actions initially appeared for all leaves.

The UI logic was refined so that actions are displayed only for:

PENDING

leaves.

Leave Status Handling

The application correctly maintains:

PENDING
GRANTED
REJECTED

states.

GitHub Project Organization

The project was organized so that both frontend and backend development artifacts can be understood from the repository.

🎓 Learning Outcomes

This project provided practical experience with modern SAP development concepts.

Through this project, I gained experience in:

SAP ABAP
ABAP RAP
CDS
Behavior Definitions
RAP Actions
Service Definitions
Service Bindings
OData V4
SAPUI5
XML Views
Controllers
Models
Routing
OData V4 Model
Dialogs
Tables
Filtering
Event handling
UI validation
Backend Integration
OData requests
CRUD operations
Business actions
Frontend-backend communication
SAP HANA persistence
Development Tools
SAP Business Application Studio
Git
GitHub
UI5 CLI
npm
Postman/OData API testing
⭐ Key Technical Highlights

The main technical highlights of this project are:

✓ SAP ABAP RAP backend
✓ ABAP CDS data modeling
✓ Managed transactional behavior
✓ Custom RAP actions
✓ OData V4 service
✓ SAPUI5 frontend
✓ Employee CRUD operations
✓ Leave management workflow
✓ Approve / Reject actions
✓ Status-based UI rendering
✓ Input validation
✓ SAP HANA persistence
✓ SAP BTP ABAP Cloud
✓ UI5 Tooling
✓ Unit & integration test structure
✓ Git/GitHub version control
📌 Project Summary

The Employee Management System demonstrates an end-to-end SAP business application built using modern SAP technologies.

The project combines:

SAPUI5
+
OData V4
+
ABAP RAP
+
ABAP CDS
+
SAP HANA
+
SAP BTP

The application demonstrates both technical development and business process implementation, particularly through the employee lifecycle and leave approval workflow.

The project is intended as a practical demonstration of SAP ABAP/RAP and SAPUI5 development skills.

👨‍💻 Author
Srikanta Kamal

Software Developer | SAP ABAP | RAP | SAPUI5 | Backend Development
