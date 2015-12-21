class Skill < ActiveRecord::Base
  enum level: %w(Bad Half-bad Fantastic)
end
