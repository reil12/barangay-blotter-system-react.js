# Barangay Blotter System

A web system for recording barangay blotter entries. Residents can file incident reports online and follow their status. The barangay admin manages all records, sends mediation meeting notices, views analytics, and manages users and announcements.

## Features

**Residents**
- Sign up and confirm the email address with a 6-digit code
- Log in with a password, then enter a code sent by email
- File a blotter report and get a case number (for example, BRG-2026-0001)
- View own reports and their status
- Read announcements, emergency contacts, and the How to File guide

**Admin**
- View, search, and filter all blotter records
- Edit a record, change its status (Pending, Settled, Dismissed), or delete it
- Print a certificate for a record
- Email the complainant the date, time, and place of a mediation meeting
- View analytics charts
- Search users and delete non-admin accounts
- Post and delete announcements
- Export all records to Excel

## Technology

- Frontend: React and Vite
- Backend: Python with Flask
- Database: Microsoft SQL Server
- Email: Gmail (SMTP)

## Project folders

- `app.py`: the Flask server
- `database_backup.sql`: creates the database and tables
- `static/react/`: the built frontend, ready to run
- `frontend/`: the React source code
- `static/images/`: images used by the site

## Requirements

- Windows 10 or 11
- Python 3.10 or newer
- Microsoft SQL Server Express
- SQL Server Management Studio (SSMS)
- ODBC Driver 17 for SQL Server
- A Gmail account with an App Password

## How to run it on your computer

### Step 1: Install Python

1. Download Python from python.org.
2. Run the installer and tick **Add Python to PATH**.
3. Click **Install Now**.

### Step 2: Install SQL Server and SSMS

1. Download SQL Server Express from Microsoft's website and install it with the Basic option.
2. Note the server name shown at the end of the install. It is usually `YOURPCNAME\SQLEXPRESS`.
3. Download and install SQL Server Management Studio (SSMS).

### Step 3: Install the ODBC driver

Download **ODBC Driver 17 for SQL Server** from Microsoft's website and install it.

### Step 4: Create the database

1. Open SSMS and connect to your SQL Server using the server name from Step 2.
2. Click **File → Open → File**, select `database_backup.sql`, and click **Open**.
3. Click **Execute** (or press F5).
4. Refresh the Databases list. You should see **BarangayBlotterDB**.

### Step 5: Set the server name in app.py

1. Open `app.py` in Notepad or VS Code.
2. Find the function `get_db()`.
3. Change the SERVER line to your server name, with two backslashes:

```python
"SERVER=YOURPCNAME\\SQLEXPRESS;"
```

4. Save the file.

### Step 6: Set up the email account

The system sends the login and verification codes from a Gmail account.

1. Turn on 2-Step Verification in your Google account.
2. Create an App Password (search "App passwords" in your Google account settings).
3. In `app.py`, find the lines that start with `app.config['MAIL_`.
4. Set `MAIL_USERNAME` to your Gmail address.
5. Set `MAIL_PASSWORD` to the App Password. Your normal Gmail password will not work.
6. Save the file.

### Step 7: Install the Python packages

1. Open the project folder in File Explorer.
2. Click the address bar, type `cmd`, and press Enter. A Command Prompt opens in that folder.
3. Run:

```bat
pip install flask flask-mail pyodbc openpyxl
```

### Step 8: Start the system

1. In the same Command Prompt, run:

```bat
python app.py
```

2. Leave this window open while you use the system.
3. Open your browser and go to **http://127.0.0.1:5000**.

### Step 9: Create an admin account

1. On the website, click **Sign up** and create an account. Use an email you can access.
2. Enter the code from your email to verify the account.
3. In SSMS, open the **Users** table in BarangayBlotterDB and change that account's **Role** from `user` to `admin`.
4. Log in again. You will be taken to the admin panel.

## If you change the frontend code

The built files are already in `static/react/`, so you do not need Node.js to run the system. If you edit the React code in `frontend/src`, install Node.js (nodejs.org) and run these commands inside the `frontend` folder:

```bat
npm install
npm run build
```

Then restart `python app.py`.

## Troubleshooting

- **"can't open file 'app.py'"**: The Command Prompt is in the wrong folder. Open it in the folder that contains `app.py`.
- **Cannot connect to the database**: Check the server name in `get_db()`, make sure SQL Server is running, and confirm that ODBC Driver 17 is installed.
- **No code arrives by email**: Check the Gmail address and App Password in `app.py`, and look in the spam folder.
- **Blank page or "React build missing"**: The `static/react` folder is missing or empty. Build the frontend again.

## Notes

- The certificate has placeholder text for the barangay name and officials. Replace it in `frontend/src/pages/CertificatePage.jsx` before official use.
- Case numbers are counted per year. If records are deleted, numbers can repeat.
- Meant for use on a local computer or local network. HTTPS is not set up.
