class Skill < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string  :name
      t.string  :details
      t.integer :level, default: 0

      t.timestamps
    end
  end
end
