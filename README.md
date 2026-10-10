# Barangay Blotter System

This is a web system for a barangay to record incident reports, which are called blotter entries. Residents file reports online and can follow what happens to them. The barangay admin, usually the Kapitan and staff, manages the records from one panel.

The screens are built with React. The server is a small Flask app in Python, and the data is kept in Microsoft SQL Server.

## What the system does

Residents can create an account and confirm their email with a 6-digit code. After that, they log in with their password and another code that is emailed to them. Once inside, a resident can file a report. The system gives each report a case number in the form BRG-2026-0001. Residents can see their own reports and check their status. They can also read the barangay announcements, the emergency contacts, and a short guide on how to file, which lists the barangay ordinances.

The admin sees every report. From there, the admin can search and filter the list, edit a report, mark it as Pending, Settled, or Dismissed, print a certificate, or delete it. The admin can also send an email to the complainant with the date, time, and place of a mediation meeting. Other admin pages show charts of the incidents, a list of users, and the announcements. Everything can be exported to Excel.

Some things the system does not do yet. The person being reported is only a name in the record. They do not get an email and do not have an account. Meeting emails are sent but not saved in the database. There is no password reset, no SMS, and no file upload for evidence.

## Project layout

- `app.py` is the server. It handles login, the codes sent by email, the database queries, and the Excel export.
- `database_backup.sql` creates the database and its three tables: Users, Incidents, and Announcements.
- `static/react/` holds the built version of the screens. You do not need to change it unless you change the React code.
- `static/images/` holds the pictures used in the app.
- `frontend/` holds the React source code. Pages are in `frontend/src/pages`, shared parts are in `frontend/src/components`, and the page styles are in `frontend/src/styles`.

## Running it on another computer

These steps are for Windows. You need the following installed first.

1. Python 3.10 or newer. During installation, tick "Add Python to PATH".
2. Microsoft SQL Server Express. Choose the basic installation.
3. SQL Server Management Studio (SSMS), to restore the database.
4. ODBC Driver 17 for SQL Server, from Microsoft's website.
5. Node.js, only if you plan to change the React code.

### Step 1: Restore the database

1. Open SSMS and connect to your SQL Server. The server name is usually `YOURPCNAME\SQLEXPRESS`.
2. Open `database_backup.sql` and run it. This creates the database called `BarangayBlotterDB` with its tables and sample data.

### Step 2: Point the app to your database

Open `app.py` in a text editor and find the function `get_db()`. Change the SERVER value so it matches your server name:

```python
"SERVER=YOURPCNAME\\SQLEXPRESS;"
```

Use two backslashes, as shown.

### Step 3: Set up the email settings

The app sends codes through a Gmail account. In `app.py`, find the lines that start with `app.config['MAIL_`. Set `MAIL_USERNAME` to your Gmail address and `MAIL_PASSWORD` to a Gmail App Password. A normal Gmail password will not work. You can create an App Password in your Google account under Security, after you turn on 2-Step Verification.

Use an account you control, and do not share the App Password with anyone. The current version of `app.py` has these values written in the file. Moving them to environment variables is recommended, but it is not done yet.

### Step 4: Install the Python packages

Open Command Prompt, go to the project folder (the one that contains `app.py`), and run:

```bat
pip install flask flask-mail pyodbc openpyxl
```

### Step 5: Start the server

From the same folder, run:

```bat
python app.py
```

Leave this window open while you use the system. Then open a browser and go to:

```
http://127.0.0.1:5000
```

To create an admin account, sign up normally and then change its Role to `admin` in the Users table with SSMS. Admin accounts cannot be deleted from the system.

## Changing the React code

You only need this part if you want to edit the screens.

1. Install Node.js from nodejs.org.
2. Open a terminal in the `frontend` folder and run `npm install`. This only needs to be done once.
3. Make your changes in `frontend/src`.
4. Run `npm run build`. This writes the new version into `static/react/`.
5. Restart `python app.py` and refresh the browser.

While you are developing, you can run `npm run dev` in the `frontend` folder. It opens the site at `http://localhost:5173` and reloads when you save a file. Keep `python app.py` running in another window at the same time.

## Common problems

**"can't open file app.py"**: The terminal is in the wrong folder. Go into the folder that contains `app.py` and run the command again.

**Cannot connect to the database**: Check the SERVER name in `get_db()`. Make sure SQL Server is running and that `BarangayBlotterDB` exists. Also make sure ODBC Driver 17 is installed.

**The login code does not arrive**: Check the mail settings in `app.py`, look in the spam folder, and confirm that you used an App Password.

**The page is blank or says the React build is missing**: The `static/react` folder is missing or empty. Build the frontend again with `npm run build`.

**`Cannot find package 'vite'`**: Run `npm install` in the `frontend` folder before `npm run build`.

## Notes

- The certificate page has placeholder text for the barangay name and the officials. Edit `frontend/src/pages/CertificatePage.jsx` and replace them before using the certificate officially, then run `npm run build`.
- Case numbers are based on how many reports were filed in the current year. If reports are deleted, a number may be used again.
- The system is meant for a local computer or a local network. It does not use HTTPS.
