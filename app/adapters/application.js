

export default DS.RESTAdapter.extend({

  host: window.FootieVizENV.HOST,
  namespace: window.FootieVizENV.NAMESPACE,

  defaultSerializer: '-default'
});
