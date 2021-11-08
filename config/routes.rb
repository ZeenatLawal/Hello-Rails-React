Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    get :greetings, to: 'greetings#index'
  end

  # Forward all requests to StaticController#index but requests
  # must be non-Ajax (!req.xhr?) and HTML Mime type (req.format.html?).
  # This does not include the root ("/") path.
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
