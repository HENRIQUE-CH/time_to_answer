class CreateTestes < ActiveRecord::Migration[6.1]
  def change
    create_table :testes do |t|

      t.timestamps
    end
  end
end
