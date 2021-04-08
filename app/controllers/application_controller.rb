class ApplicationController < ActionController::Base

    after_action :show_console

    def show_console
        console if ENV['RAILS_ENV'] == 'development' && params['c']
    end
end
