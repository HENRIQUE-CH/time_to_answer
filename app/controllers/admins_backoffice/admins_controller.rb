class AdminsBackoffice::AdminsController < AdminsBackofficeController
  # aqui estão os métodos
  #
  def index
    @admins = Admin.all
  end


  def edit
    @admin = Admin.find(params[:id])
  end

  def update
    @admin = Admin.find(params[:id])
    params_admin = params.require(:admin).permit(:email, :password, :password_confirmation)

    if @admin.update(params_admin)
      redirect_to admins_backoffice_admin_path, notice: "Administrador atualizado com sucesso"
    else
      render :edit
    end
  end
  end