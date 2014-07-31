import DS from 'ember-data';

export default DS.Model.extend({
  fixtures: DS.hasMany('fixture', {
    async: true
  }),
  seasons_history: DS.hasMany('seasonshistory', {
    async: true
  }),
  photo: DS.attr(''),
  event_total: DS.attr(''),
  type_name: DS.attr(''),
  team_name: DS.attr(''),
  selected_by: DS.attr(''),
  total_points: DS.attr(''),
  current_fixture: DS.attr(''),
  next_fixture: DS.attr(''),
  team_code: DS.attr(''),
  news: DS.attr(''),
  team_id: DS.attr(''),
  status: DS.attr(''),
  code: DS.attr(''),
  first_name: DS.attr(''),
  second_name: DS.attr(''),
  web_name: DS.attr(''),
  now_cost: DS.attr(''),
  chance_of_playing_this_round: DS.attr(''),
  chance_of_playing_next_round: DS.attr(''),
  value_form: DS.attr(''),
  value_season: DS.attr(''),
  cost_change_start: DS.attr(''),
  cost_change_event: DS.attr(''),
  cost_change_start_fall: DS.attr(''),
  cost_change_event_fall: DS.attr(''),
  in_dreamteam: DS.attr(''),
  dreamteam_count: DS.attr(''),
  selected_by_percent: DS.attr(''),
  form: DS.attr(''),
  transfers_out: DS.attr(''),
  transfers_in: DS.attr(''),
  transfers_out_event: DS.attr(''),
  transfers_in_event: DS.attr(''),
  event_points: DS.attr(''),
  points_per_game: DS.attr(''),
  ep_this: DS.attr(''),
  ep_next: DS.attr(''),
  special: DS.attr(''),
  minutes: DS.attr(''),
  goals_scored: DS.attr(''),
  assists: DS.attr(''),
  clean_sheets: DS.attr(''),
  goals_conceded: DS.attr(''),
  own_goals: DS.attr(''),
  penalties_saved: DS.attr(''),
  penalties_missed: DS.attr(''),
  yellow_cards: DS.attr(''),
  red_cards: DS.attr(''),
  saves: DS.attr(''),
  bonus: DS.attr(''),
  ea_index: DS.attr(''),
  bps: DS.attr(''),
  element_type: DS.attr(''),
  team: DS.attr(''),

  photoBaseUrl: function() {
    return 'http://cdn.ismfg.net/static/plfpl/img/shirts/photos/';
    }.property('photo'),

  badgeBaseUrl: function() {
    return 'http://cdn.ismfg.net/static/plfpl/img/badges/badge_';
  }.property('team_id'),

  full_name: function() {
    return this.get('first_name') + ' ' + this.get('second_name');
  }.property('first_name', 'second_name'),

  photo_url: function() {
    return this.get('photoBaseUrl') + this.get('photo');
  }.property('photo'),

  badge_image_url: function() {
    return this.get('badgeBaseUrl') + this.get('team_id') + '.png';
  }.property('team_id'),

  price: function() {
    return this.get('now_cost') / 10;
  }.property('now_cost'),

  nextFixture: function() {
    return this.get('fixtures.all[0][2]');
  }.property('fixtures'),

  seasonsInEPL: function() {
    return this.get('fixtures.all.length');
  }.property(),



});
