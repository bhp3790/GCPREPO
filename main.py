import webapp2

from google.appengine.ext import db


class Employee(db.Model):
    EmployeeID = db.StringProperty(multiline=True)
    EmployeerName = db.StringProperty(multiline=True)
    

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write('<html><body><h1>Python GCP</h1>')
        self.query = Employee.all()
        self.response.write('<h2>Kind : Employed Details</h2>')
        self.response.write('<table><tr><th>EmployeeID</th><th>EmployeeName</th></tr>')
        for self.employee in self.query:
            self.response.write('<tr><td>%s</td>' % self.employee.EmployeeID)
            self.response.write('<td>%s</td></tr>' % self.employee.EmployeeName)
        self.response.write('</body></html>')


app = webapp2.WSGIApplication([('/', MainPage)], debug=True)
