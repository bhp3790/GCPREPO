import webapp2

from google.appengine.ext import db


class customer(db.Model):
    customerid = db.StringProperty(multiline=True)
    customername = db.StringProperty(multiline=True)
    

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write('<html><body><h1>GCP POC</h1>')
        self.query = customer.all()
        self.response.write('<h2>Kind : Customer Details</h2>')
        self.response.write('<table><tr><th>CustomerID</th><th>CustomerName</th></tr>')
        for self.customer in self.query:
            self.response.write('<tr><td>%s</td>' % self.customer.customerid)
            self.response.write('<td>%s</td></tr>' % self.customer.customername)
        self.response.write('</body></html>')


app = webapp2.WSGIApplication([('/', MainPage)], debug=True)
