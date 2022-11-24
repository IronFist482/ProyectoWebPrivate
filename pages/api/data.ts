const redireccionPrincipal = async(req,res) => {
    try {
      // some await stuff here
      res.redirect(307, '/');
    } catch (err) {
      res.status(500).send({ error: 'Error while fetching data' });
    }
}
export {redireccionPrincipal}

const redireccionError = async(req,res) => {
  try {
    // some await stuff here
    res.redirect(307, '/');
  } catch (err) {
    res.status(500).send({ error: 'Error while fetching data' });
  }
}
export {redireccionError}