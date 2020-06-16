import express from 'express';
import path from 'path';

const app = express();

const port = 8080;

const authUrl = '/authorization';

app.get('*.js', (req, res, next) => {
  req.url = req.url.replace(authUrl, '') + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
app.get('*.css', (req, res, next) => {
  req.url = req.url.replace(authUrl, '') + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

//By default GKE ingress will check this to report pod health
app.get('/health-check', (req, res) => {
  res.send('Health check passed');
});

//By default GKE ingress will check this to report pod health
app.get('/bad-health', (req, res) => {
  res.status(500).send('Health check did not pass');
});

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, () => {
  console.clear();
  console.log(`zopa-gke-example-server listening on port ${port}!`);
});
export default app;
