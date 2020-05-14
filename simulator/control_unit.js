var control_unit ={

	get_signals : function(opcode, funct){
		var control_signals = {};
		switch(opcode){
			case 0x0: // R - type
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 0;
				control_signals.regwrite_en_ctrl = 1;
				control_signals.jump_ctrl = 0;
				control_signals.reg_dst_ctrl = 0;
				control_signals.branch_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
				switch(funct){
					case 0x20: control_signals.alu_func_ctrl = 0; break; // add
					case 0x26: control_signals.alu_func_ctrl = 4; break; // xor
					case 0x22: control_signals.alu_func_ctrl = 1; break; // sub
					case 0x2a: control_signals.alu_func_ctrl = 8; break; // slt
					case 0x8:  control_signals.alu_func_ctrl = 0; break; // jr (Don't Care)
				}
				break; 

			case 0x23: // LW
				control_signals.memtoreg_ctrl = 1;
				control_signals.alusrc_ctrl = 1;
				control_signals.regwrite_en_ctrl = 1;
				control_signals.jump_ctrl = 0;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
				break; 

			case 0x2B: // SW
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 1;
				control_signals.regwrite_en_ctrl = 0;
				control_signals.jump_ctrl = 0;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 1;
				break; 

			case 0x4: // BEQ
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 0;
				control_signals.regwrite_en_ctrl = 0;
				control_signals.jump_ctrl = 0;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 1;
				control_signals.alu_func_ctrl = 1;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
				break; 

			case 0x5: // BNE
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 0;
				control_signals.regwrite_en_ctrl = 1;
				control_signals.jump_ctrl = 0;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 1;
				control_signals.bne_ctrl = 1;
				control_signals.mem_write_en_ctrl = 0;
				break; 

			case 0x2: // J
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 0;
				control_signals.regwrite_en_ctrl = 0;
				control_signals.jump_ctrl = 1;
				control_signals.reg_dst_ctrl = 0;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
				control_signals.jump_procedure = 0;
				control_signals.return_procedure = 0;
				control_signals.jal = 0;
				control_signals.jr = 0;
				break; 

			case 0x3: // JAL
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 0;
				control_signals.regwrite_en_ctrl = 1;
				control_signals.jump_ctrl = 1;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
				control_signals.jump_procedure = 0;
				control_signals.return_procedure = 0;
				control_signals.jal = 1;
				control_signals.jr = 0;
				break; 
			

			case 0x6: // JR
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 0;
				control_signals.regwrite_en_ctrl = 1;
				control_signals.jump_ctrl = 1;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
				control_signals.jump_procedure = 0;
				control_signals.return_procedure = 0;
				control_signals.jal = 0;
				control_signals.jr = 1;
				break; 

			case 0x9: // JP
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 0;
				control_signals.regwrite_en_ctrl = 1;
				control_signals.jump_ctrl = 1;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
				control_signals.jump_procedure = 1;
				control_signals.return_procedure = 0;
				control_signals.jal = 0;
				control_signals.jr = 0;
				break; 

			case 0xA: // JPR
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 0;
				control_signals.regwrite_en_ctrl = 1;
				control_signals.jump_ctrl = 1;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
				control_signals.jump_procedure = 0;
				control_signals.return_procedure = 1;
				control_signals.jal = 0;
				control_signals.jr = 0;
				break; 

			case 0x8: // addi
				control_signals.memtoreg_ctrl = 0;
				control_signals.alusrc_ctrl = 1;
				control_signals.regwrite_en_ctrl = 1;
				control_signals.jump_ctrl = 0;
				control_signals.reg_dst_ctrl = 1;
				control_signals.branch_ctrl = 0;
				control_signals.alu_func_ctrl = 0;
				control_signals.bne_ctrl = 0;
				control_signals.mem_write_en_ctrl = 0;
			break;
		}
		return control_signals;
	}
}