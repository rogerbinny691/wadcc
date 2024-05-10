import webapp2

class MainPage(webapp2.RequestHandler):
    def fet(self):
        self.response.write("HELLO WORLD")

app = webapp2.WSGIApplication([('/',MainPage)], debug=True)
