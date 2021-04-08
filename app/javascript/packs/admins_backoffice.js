// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap'
import 'jquery-easing'
import '@fortawesome/fontawesome-free/css/all'

import '../../../lib/assets/javascripts/sb-admin-2'
import 'bootstrap-growl-ifightcrime/jquery.bootstrap-growl'


import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
const application = Application.start()
const context = require.context("controllers", true, /.js$/)
application.load(definitionsFromContext(context))

console.log('deu certo webpacker')

