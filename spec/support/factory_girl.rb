# frozen_string_literal: true
# Adds FactoryGirl methods to global context
RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
end
